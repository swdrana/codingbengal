import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navber = () => {
  const {pathname} = useLocation();
  return (
    <div className="container mx-auto">
      <Navbar fluid={true} rounded={true}>
        <Link to={"/"}>
          <Navbar.Brand>
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Coding Bengal
            </span>
          </Navbar.Brand>
        </Link>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Rana</span>
              <span className="block truncate text-sm font-medium">
                admin@codingbengal.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <Link to={"/dashboard"}>Dashboard</Link>
            </Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={pathname === '/'? true : false}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={pathname === '/about'? true : false}>
            <Link to='/about'>About</Link>
          </Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navber;
