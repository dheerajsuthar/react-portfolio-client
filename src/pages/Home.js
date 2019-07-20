import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>
                            <Link to="profile/1">My profile</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <section>
                <h2>Home Page</h2>
                <article>
                    <header>
                        <p>Item 1</p>
                    </header>
                    <p>Item 1 description</p>
                </article>
                <article>
                    <header>
                        <p>Item 2</p>
                    </header>
                    <p>Item 2 description</p>
                </article>
            </section>
            <footer>&copy; Badcanvas 2018-19</footer>
        </>
    );
}