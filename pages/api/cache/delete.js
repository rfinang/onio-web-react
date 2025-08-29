import ClientRedis from '../../../redis/index'
import KeyCache from "../../../constant/cache";

async function deleteCacheByModel(model) {
    let existKeys = await ClientRedis.keys( `${model}*`)
    let pipeline = ClientRedis.pipeline();
    existKeys.forEach(function (key) {
        pipeline.del(key);
    });
    await pipeline.exec();
    console.log(`${model} cache cleared.`)

}
export default async function handler(req, res) {
    if (req.method === 'GET') {
        let key = process.env.CLEAR_ALL_CACHE_KEY;

        let query = req.query;

        if (key !== query.key) {
            return res.status(400).json({
                status: 400,
                message: 'Invalid Key'
            })

        }

        await ClientRedis.flushdb();

        return res.status(200).json({ success: true });

    } else if (req.method === 'POST') {
        let hook_key = process.env.WEBHOOK_HANDLER_KEY;

        if (hook_key !== req.headers['webhook-handler-key']) {
            return res.status(400).json({
                status: 400,
                message: 'Invalid WEBHOOK_HANDLER_KEY'
            })
        }


        if (req.body.event === 'trigger-test') {
            await ClientRedis.flushdb();
            console.log('All cache cleared.')
            return res.status(200).send();
        }

        const model = req.body.model;

        if (!model) {
            return res.status(400).send();
        }
        console.log('model')
        console.log(model)
        switch (model) {
            case 'menu':
                await deleteCacheByModel('header');
                await deleteCacheByModel('footer');
                break;
            case 'category':
                await deleteCacheByModel(KeyCache.blog);
                break;
            case 'writer':
                await deleteCacheByModel(KeyCache.blog);
                break;
            case 'article':
                await deleteCacheByModel(KeyCache.news);
                await deleteCacheByModel(KeyCache.about);
                break;
            case 'work-location':
                await deleteCacheByModel(KeyCache.career);
                break;
            case 'career':
                await deleteCacheByModel(KeyCache.about);
                break;
            case 'product':
                await deleteCacheByModel(KeyCache.onioZero);
                break;
            case 'careers-module':
                await deleteCacheByModel(KeyCache.about);
                await deleteCacheByModel(KeyCache.careerLanding);
                break;
            case 'contact-o-ni-o-module':
            case 'newsletter-module':
                await deleteCacheByModel(KeyCache.about);
                await deleteCacheByModel(KeyCache.home);
                await deleteCacheByModel(KeyCache.investors);
                await deleteCacheByModel(KeyCache.onioZero);
                await deleteCacheByModel(KeyCache.batterylessRemote);
                await deleteCacheByModel(KeyCache.energyEmulator);
                break;
            case 'lower-bom-module':
                await deleteCacheByModel(KeyCache.home);
                await deleteCacheByModel(KeyCache.productLanding);
                await deleteCacheByModel(KeyCache.onioZero);
                break;
            case 'one-chip-many-possibilities-module':
                await deleteCacheByModel(KeyCache.home);
                await deleteCacheByModel(KeyCache.productLanding);
                break;
            case 'turnkey-smart-remote':
                await deleteCacheByModel(KeyCache.batterylessRemote);
                break;
            case 'turnkey-project-landing':
                await deleteCacheByModel(KeyCache.technologyRedefined);
                break;
            case 'technology-redefined-module':
                await deleteCacheByModel(KeyCache.home);
                await deleteCacheByModel(KeyCache.blogLanding);
                await deleteCacheByModel(KeyCache.productLanding);
                await deleteCacheByModel(KeyCache.onioZero);
                await deleteCacheByModel(KeyCache.technologyRedefined);
                break;
            case 'the-power-of-zero-module':
                await deleteCacheByModel(KeyCache.home);
                await deleteCacheByModel(KeyCache.about);
                break;
            case 'interactive-energy-tool':
                await deleteCacheByModel(KeyCache.energyEmulator);
                break;
        }

        await deleteCacheByModel(model);

        return res.status(200).send();

    } else {
        return res.status(405).send();
    }

}
