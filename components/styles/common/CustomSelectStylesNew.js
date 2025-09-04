export const customSelectStylesNew = {
    container: (provided) => ({
        ...provided,
        width: '100%',
    }),
    option: (provided, state) => ({
        ...provided,
        borderBottom: "1px dotted pink",
        color: "var(--onio-color-primary)",
        fontWeight: 500,
        fontSize: "1.8rem",
        lineHeight: "2.2rem",
        padding: 10,
        cursor: "pointer",
        paddingLeft: 12,
        paddingRight: 12,
        zIndex: 23,
        border: "none",
        backgroundColor: state.isSelected ? "var(--onio-color-background)" : "transparent",
        transition: "background-color 0.4s ease",
        "&:hover": {
            backgroundColor: "var(--onio-color-background)",
            cursor: "pointer",
        },
    }),
    control: (provided) => ({
        ...provided,
        backgroundColor: "transparent",
        color: "var(--onio-color-white)",
        width: "100%",
        fontSize: "1.8rem",
        /* paddingTop: "2rem", */
        borderRadius: 0,
        border: "none",
        borderBottom: "0.2rem solid",
        borderBottomColor: "var(--onio-color-white)",
        boxShadow: "none",
        "&:hover": {
            borderColor: "var(--onio-color-white)",
        },
    }),
    singleValue: (provided) => ({ ...provided, color: "var(--onio-color-white)", gap: 0, margin: 0 }),
    valueContainer: (provided) => ({
        ...provided,
        zIndex: 20,
        margin: 0,
        padding: 0,
        border: "none",
    }),
    placeholder: (provided) => ({
        ...provided,
        color: "var(--onio-color-white)",
    }),
    input: (provided) => ({
        ...provided,
        margin: 0,
        padding: 0,
        height: "4.8rem",
    }),
    menu: (provided) => ({
        ...provided,
        zIndex: 22,
        borderRadius: 0,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: "0.3rem",
    }),
    menuPortal: (base) => ({
        ...base,
        zIndex: 21
    }),
    indicatorSeparator: () => ({ display: "none" }),
    indicatorsContainer: (provided) => ({
        ...provided,
        alignItems: "center",
        display: "flex",
    })
};
