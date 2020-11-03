import React, { Component, Fragment } from 'react';
import '../../scss/sidebars.scss';
import {ReactComponent as HomeIcon} from '../../images/icons/home-icon.svg';
import {ReactComponent as RightArrow} from '../../images/icons/right-arrow.svg';
import {ReactComponent as SettingsIcon} from '../../images/icons/settings-icon.svg';
import {ReactComponent as FinanceIcon} from '../../images/icons/finance-icon.svg';
import {ReactComponent as MessageIcon} from '../../images/icons/message-icon.svg';
import {ReactComponent as ReportsIcon} from '../../images/icons/reports-icon.svg';
import {ReactComponent as OrdersIcon} from '../../images/icons/orders-icon.svg';
import {ReactComponent as ProductIcon} from '../../images/icons/product-icon.svg';
import { Link } from 'react-router-dom';

export default class PrimarySidebar extends Component {
    state = {
        selectedIndex: 0,
        active: false
    }
    render() {
       const links =  [
            {
                level0: {
                    id: 1,
                    slug: "dashboard",
                    title: "Dashboard",
                    icon: HomeIcon
                }
            },
            {
                level0: {
                    id: 2,
                    slug: "products",
                    title: "Products",
                    icon: ProductIcon,
                    level1: [
                        {
                            id: 3,
                            slug: "all-products",
                            title: "All Products"
                        },
                        {
                            id: 4,
                            slug: "inventory",
                            title: "Inventory"
                        }
                    ]
                }
            },
            {
                level0: {
                    id: 5,
                    slug: "messages",
                    title: "Messages",
                    icon: MessageIcon
                }
            },
            {
                level0: {
                    id: 6,
                    slug: "orders",
                    title: "Orders",
                    icon: OrdersIcon
                }
            },
            {

                level0: {
                    id: 7,
                    slug: "stats",
                    title: "Stats",
                    icon: ReportsIcon,
                    level1: [
                        {
                            title: "Dashboard",
                            slug: "stats/dashboard",
                            id: 8
                        },
                        {
                            title: "Reports",
                            slug: "stats/reports",
                            id: 9
                        }
                    ]
                }
            },
            {
                level0: {
                    id: 10,
                    title: "Finance",
                    slug: "finance",
                    icon: FinanceIcon,
                    level1: [
                        {
                            title: "Payment account",
                            slug: "finance/payment-account",
                            id: 11
                        },
                        {
                            title: "Payment settings",
                            slug: "finance/payment-settings",
                            id: 12
                        },
                        {
                            title: "Taxpayer ID",
                            slug: "finance/taxpayer-id's",
                            id: 13
                        }
                    ]
                },
            },
            {
                level0: {
                    id: 14,
                    slug: "settings",
                    title: "Settings",
                    icon: SettingsIcon
                }
            }
        ];
        return(
            <div className="primary-sidebar-container px-3">
                <ul>

                    {
                        links.map((item, index) => (
                            <Fragment >
                                <li className="pb-4 sidebar-links-content-container d-flex justify-between align-items-center">
                                    <Link className="d-flex align-items-center d-block" to="/">
                                        <item.level0.icon />
                                        <div className="link-content ml-3 text-secondary">
                                            {item.level0.title}
                                        </div>
                                    </Link>
                                    {item.level0.level1 ? (
                                        <div className="link-content-icon" 
                                        onClick={
                                            () => 
                                                document.querySelectorAll(".dropdown-items")[index].classList.toggle("d-none")
                                                // this.setState({selectedIndex: index, active: this.state.active})
                                            }>
                                            <RightArrow />
                                        </div>
                                    ) : null}
                                    
                                </li>
                                
                                {
                                    this.state.selectedIndex === index && this.state.active ? (
                                        
                                            item.level0.level1 && item.level0.level1.map((item1, index) => {
                                                return(
                                                    <li className="pb-4 sidebar-links-content-container sub-links d-none">
                                                        <div className="d-flex align-items-center">
                                                            <div className="link-content ml-3 text-secondary">
                                                                {item1.title}
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        
                                    ) : null
                                }
                                
                                
                                
                            </Fragment>
                            

                        ))
                    }

                    
                     
                </ul>
            </div>
        )
    }
}