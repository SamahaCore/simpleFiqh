module.exports = {
    title: "Simple Fiqh",
    description: "A reference for everyday fiqh",
    themeConfig: {
        logo: "/fiqh-temp-logo.png",
        nav: [
            {
                text: 'Schools',
                ariaLabel: 'madhabs',
                items: [
                    { text: 'Hanafi', link: '/hanafi/' },
                    { text: 'Shafii', link: '/shafii/' }
                ]
            },
            {
                text: 'About', link: '/about'
            }
        ],
        sidebar: {
            '/hanafi/': [
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
                }
            ],
            '/shafii/': [
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
                }
            ]
        }
    }
}