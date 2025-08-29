const SITEMAP_SCHEMES_ROUTE = [
    {
        "pattern": "/investors",
        "isStatic": true
    },
    {
        "pattern": "/article",
        "isStatic": true
    },
    {
        "pattern": "/article/{slug}.html",
        "name": "blog",
        "col": "slug"
    },
    {
        "pattern": "/article/category/{slug}.html",
        "name": "category",
        "col": "slug"
    },
    {
        "pattern": "/news",
        "isStatic": true
    },
    {
        "pattern": "/news/{slug}.html",
        "name": "article",
        "col": "slug"
    },
    {
        "pattern": "/products",
        "isStatic": true
    },
    {
        "pattern": "/products/{slug}.html",
        "name": "product",
        "col": "slug"
    },
    {
        "pattern": "/{slug}.html",
        "name": "page",
        "col": "slug"
    },
    {
        "pattern": "/privacy-policy",
        "isStatic": true
    },
    {
        "pattern": "/privacy-settings",
        "isStatic": true
    },
    {
        "pattern": "/about",
        "isStatic": true
    },
    {
        "pattern": "/career",
        "isStatic": true
    },
    {
        "pattern": "/career/{slug}.html",
        "name": "career",
        "col": "slug"
    },
    {
        "pattern": "/team-member/{slug}.html",
        "name": "writer",
        "col": "slug"
    },
    {
        "pattern": "/technology-redefined/batteryless-remote",
        "isStatic": true
    },
    {
        "pattern": "",
        "isStatic": true
    }
]

export default function handler(req, res) {
    res.status(200).json({
        code: 200,
        message: SITEMAP_SCHEMES_ROUTE
    })
}