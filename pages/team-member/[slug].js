import React from "react";
import {getBlogApi, getBlogDetailApi, getWritersApi} from "../../api";
import TeamMemberPage from "../../components/team-member";
import KeyCache from "../../constant/cache";
import ClientRedis from "../../redis";

function TeamMember(props) {
    return <TeamMemberPage {...props} />;
}

export const getServerSideProps = async (props) => {
    const slug = props.query.slug.replace(".html", "");

    let teamMemberData;
    let cacheKey = KeyCache.writer + '--' + slug;
    const dataCache = await ClientRedis.get(cacheKey)
    if (dataCache) {
        teamMemberData = JSON.parse(dataCache);
    } else {
        const teamMember = await getWritersApi({
            filters: {
                slug: {
                    $eq: slug
                }
            }
        }).catch((e) => {
            return false;
        });
        teamMemberData = teamMember?.data.data;
        ClientRedis.set(cacheKey, JSON.stringify(teamMemberData))
    }

    if (!teamMemberData) {
        return {
            props: {
                notFound: true,
            },
        };
    }

    let res = await getBlogApi({
        filters: {
            writer: {
                id: {
                    $eq: `${teamMemberData[0].id}`
                }
            }
        }
    });



    return {
        props: {
            teamMemberData,
            articleCountData: res?.data?.meta?.pagination?.total ?? 0,
        },
    };
};
export default TeamMember;
