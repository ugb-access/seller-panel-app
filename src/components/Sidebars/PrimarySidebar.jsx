import React, { Component } from 'react';
import '../../scss/sidebars.scss';
import {ReactComponent as HomeIcon} from '../../images/icons/home-icon.svg';
import {ReactComponent as RightArrow} from '../../images/icons/right-arrow.svg';
import {ReactComponent as SettingsIcon} from '../../images/icons/settings-icon.svg';
import {ReactComponent as FinanceIcon} from '../../images/icons/finance-icon.svg';
import {ReactComponent as MessageIcon} from '../../images/icons/message-icon.svg';
import {ReactComponent as ReportsIcon} from '../../images/icons/reports-icon.svg';
import {ReactComponent as OrdersIcon} from '../../images/icons/orders-icon.svg';
import {ReactComponent as ProductIcon} from '../../images/icons/product-icon.svg';

export default class PrimarySidebar extends Component {
    render() {
        return(
            <div className="primary-sidebar-container px-3">
                <ul>
                    <li className="pb-4 sidebar-links-content-container d-flex justify-between align-items-center">
                        <div className="d-flex align-items-center">
                            <HomeIcon />
                            <div className="link-content ml-3 text-secondary">
                                Dashboard
                            </div>
                        </div>
                        
                    </li>
                    <li className="pb-4 sidebar-links-content-container d-flex justify-between align-items-center">
                        <div className="d-flex align-items-center">
                            <ProductIcon />
                            <div className="link-content ml-3 text-secondary">
                                Products
                            </div>
                        </div>
                        <div className="link-content-icon">
                            <RightArrow />
                        </div>
                    </li>
                    <li className="pb-4 sidebar-links-content-container d-flex justify-between align-items-center">
                        <div className="d-flex align-items-center">
                            <MessageIcon />
                            <div className="link-content ml-3 text-secondary">
                                Messages
                            </div>
                        </div>
                        
                    </li>
                    <li className="pb-4 sidebar-links-content-container d-flex justify-between align-items-center">
                        <div className="d-flex align-items-center">
                            <OrdersIcon />
                            <div className="link-content ml-3 text-secondary">
                                Orders
                            </div>
                        </div>
                        
                    </li>
                    <li className="pb-4 sidebar-links-content-container d-flex justify-between align-items-center">
                        <div className="d-flex align-items-center">
                            <ReportsIcon />
                            <div className="link-content ml-3 text-secondary">
                                Reports
                            </div>
                        </div>
                        <div className="link-content-icon">
                            <RightArrow />
                        </div>
                    </li>
                    <li className="pb-4 sidebar-links-content-container d-flex justify-between align-items-center">
                        <div className="d-flex align-items-center">
                            <FinanceIcon />
                            <div className="link-content ml-3 text-secondary">
                                Finance
                            </div>
                        </div>
                        <div className="link-content-icon">
                            <RightArrow />
                        </div>
                    </li>
                    <li className="pb-4 sidebar-links-content-container d-flex justify-between align-items-center">
                        <div className="d-flex align-items-center">
                            <SettingsIcon />
                            <div className="link-content ml-3 text-secondary">
                                Settings
                            </div>
                        </div>
                        
                    </li>
                </ul>
            </div>
        )
    }
}