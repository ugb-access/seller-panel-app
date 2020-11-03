render() {

    const categories = [
        {
            level0: {
                id: 8,
                slug: "home-garden-tools",
                title: "Home, Garden & Tools",
                level1: [
                    {
                        id: 9,
                        slug: "home-garden-tools/home-decor",
                        title: "Home Decor"
                    },
                    {
                        id: 10,
                        slug: "home-garden-tools/garden-patio",
                        title: "Garden & Patio"
                    },
                    {
                        id: 11,
                        slug: "home-garden-tools/home-improvement",
                        title: "Home Improvement"
                    },
                    {
                        id: 12,
                        slug: "home-garden-tools/seasonal",
                        title: "Seasonal"
                    }
                ]
            }
        },
        {
            level0: {
                id: 4,
                slug: "kitchen-household",
                title: "Kitchen & Household",
                level1: [
                    {
                        id: 5,
                        slug: "kitchen-household/kitchen-bar",
                        title: "Kitchen & Bar"
                    },
                    {
                        id: 6,
                        slug: "kitchen-household/kitchen-bar/coffee-mugs",
                        title: "Coffee Mugs"
                    }
                    ,
                    {
                        id: 7,
                        slug: "kitchen-household/household-tools",
                        title: "Household Tools"
                    },
                ]
            }
        },
        {
            level0: {
                id: 1,
                slug: "pet-supplies",
                title: "Pet Supplies"
            }
        },
        {
            level0: {
                id: 2,
                slug: "tech-electronics",
                title: "Tech & Electronics",
            }
        },
        {

            level0: {
                id: 14,
                slug: "beauty-wellness",
                title: "Beauty & Wellness",
                level1: [
                    {
                        title: "Beauty & Personal Care",
                        slug: "beauty-wellness/beauty-and-personal-care",
                        id: 15
                    },
                    {
                        title: "Health & Pain Relief",
                        slug: "beauty-wellness/health-and-pain-relief",
                        id: 16
                    }
                ]
            }
        },
        {
            level0: {
                id: 17,
                title: "Fashion & Accessories",
                slug: "fashion-accessories",
                level1: [
                    {
                        title: "Women's Clothing",
                        slug: "fashion-accessories/womens-clothing",
                        id: 18
                    },
                    {
                        title: "Jewelry",
                        slug: "fashion-accessories/jewelry",
                        id: 19
                    },
                    {
                        title: "Accessories",
                        slug: "fashion-accessories/accessories",
                        id: 20
                    },
                    {
                        title: "T-Shirts",
                        slug: "fashion-accessories/t-shirts",
                        id: 21
                    }
                ]
            },
        },
        {
            level0: {
                id: 22,
                slug: "toys-kids-baby",
                title: "Toys, Kids & Baby",
            }
        }
    ];

    const component = (
    <Fragment>
        {
            categories.map((item,index) => {
                return(
                    <Fragment>
                        <li >
                            <div className="category-item d-flex justify-content-between pr-3">
                                <Link to={`/c/${item.level0.slug}`}>
                                    {item.level0.title}
                                </Link>
                                {
                                    item.level0.level1 && item.level0.level1.length > 0 ? (
                                        <i class="fa fa-chevron-down down-arrow" aria-hidden="true"
                                                onClick={
                                                () => document.querySelectorAll(".dropdown-items")[index].classList.toggle("d-none")}
                                        ></i>
                                    ) : null
                                }

                            </div>


                                    <ul class={`dropdown-items pl-2 p-0 animate__animated animate__faster animate__slideInLeft d-none`} >

                                        {item.level0.level1 ? item.level0.level1.map((item1, index1) => {
                                            return(
                                                <li>
                                                    <Link to={`/c/${item1.slug}`}>
                                                        {item1.title}
                                                    </Link>

                                                </li>
                                            )
                                        }) : null}
                                    </ul>
                        </li>

                    </Fragment>
                )
            })
        }

    </Fragment>