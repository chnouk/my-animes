import React from "react";
import { Breadcrumbs, Link, Box } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";

interface BreadcrumbsLinkProps {
    name: string, 
    isLast: boolean, 
    routeTo: string
}

const BreadcrumbsLink = (props: BreadcrumbsLinkProps) => {

    const history = useHistory();

    if (props.isLast)
        return (<Box key={props.name}>{props.name}</Box>)
        
    return (<Link key={props.name} onClick={() => history.push(props.routeTo)}>{props.name}</Link>)
}

const MainBreadcrumbs = () => {

    const location = useLocation()

    const pathnames = location.pathname.split("/").filter((x: any) => x);

    return (
    <Breadcrumbs>

        <BreadcrumbsLink isLast={pathnames.length <= 0} name='Home' routeTo='/' />

        {pathnames.map((name, index) => {
      
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;

            const isLast = index === pathnames.length - 1;

            return (<BreadcrumbsLink isLast={isLast} name={name} routeTo={routeTo} />)

        })}

    </Breadcrumbs>
  );
};

export default MainBreadcrumbs;
