module.exports = {
    title: "Simple Fiqh",
    description: "A reference for everyday fiqh",
    themeConfig: {
        logo: "/fiqh-temp-logo.png",
        nav: [
            {
                text: 'What is fiqh?', link: '/whatIsFiqh'
            },
            {
                text: 'About', link: '/about'
            },
            {
                text: 'Schools',
                ariaLabel: 'madhabs',
                items: [
                    { text: 'Hanafi', link: '/hanafi/' },
                    { text: 'Shafii', link: '/shafii/' }
                ]
            }
        ],
        sidebar: {
            '/': [
                {
                    title: 'Introduction',
                    path: '/intro'
                },
                {
                    title: 'Purification',   // required
                    //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
                    collapsable: false, // optional, defaults to true
                    sidebarDepth: 1,    // optional, defaults to 1
                    children: [
                        '/hanafi/tahaara/wudhu',
                        '/hanafi/tahaara/ghusl',
                        '/hanafi/tahaara/tayammum',
                        '/hanafi/tahaara/haydh',
                        '/hanafi/tahaara/najasa',
                        '/hanafi/tahaara/istinja',
                    ]
                },
                {
                    title: 'Salaah',   // required
                    //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
                    collapsable: false, // optional, defaults to true
                    sidebarDepth: 1,    // optional, defaults to 1
                    children: [
                        '/hanafi/salaah/timings',
                        '/hanafi/salaah/types',
                        '/hanafi/salaah/adhan',
                        '/hanafi/salaah/shara\'it',
                        '/hanafi/salaah/arkaan',
                        '/hanafi/salaah/wajibaat',
                        '/hanafi/salaah/sunan',
                        '/hanafi/salaah/adab',
                        '/hanafi/salaah/mufsidat',
                        '/hanafi/salaah/makruhaat',
                        '/hanafi/salaah/travelling',
                        '/hanafi/salaah/illness',
                        '/hanafi/salaah/sujud',
                    ]
                },
                {
                    title: 'Fasting',   // required
                    //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
                    collapsable: false, // optional, defaults to true
                    sidebarDepth: 1,    // optional, defaults to 1
                    children: [
                        '/hanafi/saum/mufsidat',
                        '/hanafi/saum/kaffara',
                        '/hanafi/saum/exemptions',
                        '/hanafi/saum/miscellaneous'
                    ]
                },
                {
                    title: 'Zakaat',   // required
                    //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
                    collapsable: false, // optional, defaults to true
                    sidebarDepth: 1,    // optional, defaults to 1
                    children: [
                        '/hanafi/zakaat/how-to',
                        '/hanafi/zakaat/recipients',
                        '/hanafi/zakaat/sadaqat-fitr'
                    ]
                }
            ],
            '/shafii/': [
                {
                    title: 'Introduction',
                    path: '/intro'
                },
                {
                    title: 'Purification',   // required
                    //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
                    collapsable: false, // optional, defaults to true
                    sidebarDepth: 1,    // optional, defaults to 1
                    children: [
                        '/shafii/tahaara/wudhu',
                        '/shafii/tahaara/ghusl',
                        '/shafii/tahaara/tayammum',
                        '/shafii/tahaara/haydh',
                        '/shafii/tahaara/najasa',
                        '/shafii/tahaara/istinja',
                    ]
                },
                {
                    title: 'Salaah',   // required
                    //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
                    collapsable: false, // optional, defaults to true
                    sidebarDepth: 1,    // optional, defaults to 1
                    children: [
                        '/shafii/salaah/timings',
                        '/shafii/salaah/types',
                        '/shafii/salaah/adhan',
                        '/shafii/salaah/shara\'it',
                        '/shafii/salaah/arkaan',
                        '/shafii/salaah/wajibaat',
                        '/shafii/salaah/sunan',
                        '/shafii/salaah/adab',
                        '/shafii/salaah/mufsidat',
                        '/shafii/salaah/makruhaat',
                        '/shafii/salaah/travelling',
                        '/shafii/salaah/illness',
                        '/shafii/salaah/sujud',
                    ]
                },
                {
                    title: 'Fasting',   // required
                    //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
                    collapsable: false, // optional, defaults to true
                    sidebarDepth: 1,    // optional, defaults to 1
                    children: [
                        '/shafii/saum/mufsidat',
                        '/shafii/saum/kaffara',
                        '/shafii/saum/exemptions',
                        '/shafii/saum/miscellaneous'
                    ]
                },
                {
                    title: 'Zakaat',   // required
                    //path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
                    collapsable: false, // optional, defaults to true
                    sidebarDepth: 1,    // optional, defaults to 1
                    children: [
                        '/shafii/zakaat/how-to',
                        '/shafii/zakaat/recipients',
                        '/shafii/zakaat/sadaqat-fitr'
                    ]
                }
            ]
        }
    }
}