import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Navigation = ({
    logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route
}) => {
  return (
    <>
      <Nav
      card
      fill
      tabs
      >
        <NavItem>
          <NavLink to="/" className="nav-link">
          Home
          </NavLink>
        </NavItem>
        {logged_in && (
          <NavItem>
            <a href={sign_out_route} className="nav-link">
              Sign Out
            </a>
          </NavItem>
          )}
          {logged_in && (
          <NavItem>
           <NavLink to="gymshow"  className="nav-link">
              My gyms deals
            </NavLink>
          </NavItem>
          )}
              {logged_in && (
              <NavItem>
                <NavLink to="/gymnew" className="nav-link">
                  Add a Gym
                </NavLink>
              </NavItem>
            )}
        {!logged_in && (
          <NavItem>
            <a href={sign_in_route} className="nav-link">
              Sign In
            </a>
          </NavItem>
        )}
        {!logged_in && (
          <NavItem>
            <a href={new_user_route} className="nav-link">
              Sign Up
            </a>
          </NavItem>
        )}
        <NavItem>
          <NavLink to="/gymindex" className="nav-link">
            See the deals!
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="" className="nav-link">
            About Us
          </NavLink>
        </NavItem>
        
      </Nav>
  </>
  )
}

export default Navigation