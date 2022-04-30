import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import Search from "./Search";
import Image from "next/image";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
export default function Header() {
  const { user, logout } = useContext(AuthContext);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
        
        <Image src="/images/blood.png" width={45} height={40}>
          

        </Image>
        </Link>
        
      </div>

      <nav>
        <ul>
        <li>
              <Link href="/about">About Us</Link>
              </li>
        <li>
            <Link href="/camps">
              <a>Blood Donation Camps</a>
            </Link>
          </li>
          <li>
            <Link href="/events">
              <a>Active Requirements</a>
            </Link>
          </li>

          {user ? (
            //logged in case
            <>
              <li>
                <Link href="/events/add">
                  <a>Put a Request</a>
                </Link>
              </li>
              <li>
                <Link href="/account/profile">
                  <a>Profile</a>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => logout()}
                  className="btn-secondary btn-icon"
                  id="main"
                >
                  <FaSignOutAlt></FaSignOutAlt>Sign Out
                </button>
              </li>
            </>
          ) : (
            //logged out case
            <>
              {" "}
              
              <li>
                <Link href="/account/login">
                  <a className="btn-secondary btn-icon" id="main">
                    <FaSignInAlt />
                    Sign In
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
