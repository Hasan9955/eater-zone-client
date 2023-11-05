/* eslint-disable react/no-unknown-property */
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to='/'>
                    <div className='w-32 md:w-44'>
                        <svg
                            viewBox="0 0 370 63.95110310551274"
                            className="css-1j8o68f"
                        >
                            <defs id="SvgjsDefs1176" />
                            <g
                                id="SvgjsG1177"
                                featurekey="5TMTKC-0"
                                transform="matrix(0.23254670455256285,0,0,0.23254670455256285,-0.013089645261243477,0.016526585028893453)"
                                fill="#3a4750"
                            >
                                <defs xmlns="http://www.w3.org/2000/svg" />
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        className="fil0"
                                        d="M174 115c-12,12 -21,21 -29,27 -4,-4 -8,-8 -14,-13 15,-22 10,-54 -13,-76 -25,-25 -90,-57 -111,-36 -21,21 10,86 35,112 22,22 55,27 76,13 5,5 9,9 13,13 -19,15 -28,19 -73,52 -63,47 -14,104 36,37 34,-45 38,-54 53,-72 21,25 11,20 51,74 44,61 100,14 35,-35 -54,-42 -48,-31 -73,-54 7,-8 16,-17 28,-29 12,8 29,8 43,-6l63 -72c5,-6 10,-11 5,-17l-76 76c-4,4 -10,-3 -7,-6l77 -77c-2,-2 -3,-4 -5,-6l-77 77c-4,4 -10,-3 -7,-6l77 -77c-2,-2 -4,-4 -6,-6l-76 77c-4,4 -11,-3 -7,-6l76 -77c-6,-5 -10,0 -16,5l-72 63c-15,15 -14,32 -6,45zm8 106c21,31 44,60 72,48 -33,7 -61,-37 -72,-48zm-173 -168c9,52 54,109 101,88 -40,11 -86,-42 -101,-88zm213 73c-25,4 -51,-22 -46,-46 -12,31 15,58 46,46zm-139 66c-32,22 -62,45 -49,74 -7,-35 38,-63 49,-74z"
                                        style={{ fill: "#3a4750" }}
                                    />
                                </g>
                            </g>
                            <g
                                id="SvgjsG1178"
                                featurekey="7UBp9i-0"
                                transform="matrix(2.722146590885996,0,0,2.722146590885996,86.24343739305237,-3.5706779287388137)"
                                fill="#3a4750"
                            >
                                <path d="M12.06 5.720000000000001 l0 2.64 l-7.54 0 l0 3.06 l6.92 0 l0 2.44 l-6.92 0 l0 3.5 l7.7 0 l0 2.64 l-10.84 0 l0 -14.28 l10.68 0 z M18.8 9.38 c3.0134 0.01334 4.52 0.9933 4.52 2.94 l0 5.48 c0 1.0133 0.12 1.7467 0.36 2.2 l-2.88 0 c-0.10666 -0.32 -0.17332 -0.65334 -0.19998 -1 c-0.84 0.85334 -2 1.28 -3.48 1.28 c-1.08 0 -1.9367 -0.27334 -2.57 -0.82 s-0.95 -1.3067 -0.95 -2.28 c0 -0.94666 0.3 -1.68 0.9 -2.2 c0.61334 -0.54666 1.7267 -0.89332 3.34 -1.04 c1.1467 -0.12 1.8733 -0.27 2.18 -0.45 s0.46 -0.45666 0.46 -0.83 c0 -0.46666 -0.14 -0.81332 -0.42 -1.04 s-0.74666 -0.34 -1.4 -0.34 c-0.6 0 -1.0533 0.12334 -1.36 0.37 s-0.48666 0.64332 -0.54 1.19 l-2.84 0 c0.06666 -1.1333 0.53332 -1.9933 1.4 -2.58 s2.0266 -0.88 3.48 -0.88 z M16.44 17.06 c0 0.88 0.58 1.32 1.74 1.32 c1.52 -0.01334 2.2866 -0.79334 2.3 -2.34 l0 -1.1 c-0.22666 0.22666 -0.8 0.39332 -1.72 0.49998 c-0.8 0.09334 -1.3867 0.25668 -1.76 0.49002 s-0.56 0.61 -0.56 1.13 z M29.12 6.5600000000000005 l0.000019531 3.1 l2.08 0 l0 1.9 l-2.08 0 l0 5.12 c0 0.48 0.08 0.8 0.24 0.96 s0.48 0.24 0.96 0.24 c0.34666 0 0.64 -0.02666 0.88 -0.08 l0 2.22 c-0.4 0.06666 -0.96 0.1 -1.68 0.1 c-1.0933 0 -1.9067 -0.18666 -2.44 -0.56 s-0.8 -1.02 -0.8 -1.94 l0 -6.06 l-1.72 0 l0 -1.9 l1.72 0 l0 -3.1 l2.84 0 z M37.34 9.38 c0.97334 0 1.84 0.22664 2.6 0.67998 s1.3567 1.11 1.79 1.97 s0.65 1.85 0.65 2.97 c0 0.10666 -0.0066602 0.28 -0.02 0.52 l-7.46 0 c0.02666 0.82666 0.24332 1.47 0.64998 1.93 s1.03 0.69 1.87 0.69 c0.52 0 0.99666 -0.13 1.43 -0.39 s0.71 -0.57666 0.83 -0.95 l2.5 0 c-0.73334 2.32 -2.3466 3.48 -4.84 3.48 c-0.94666 -0.01334 -1.8233 -0.22 -2.63 -0.62 s-1.45 -1.0233 -1.93 -1.87 s-0.72 -1.83 -0.72 -2.95 c0 -1.0533 0.24334 -2.0134 0.73 -2.88 s1.1333 -1.5133 1.94 -1.94 s1.6767 -0.64 2.61 -0.64 z M39.519999999999996 13.719999999999999 c-0.13334 -0.77334 -0.38 -1.3333 -0.74 -1.68 s-0.87334 -0.52 -1.54 -0.52 c-0.69334 0 -1.24 0.19666 -1.64 0.59 s-0.63334 0.93 -0.7 1.61 l4.62 0 z M50.08 9.38 c0.24 0 0.44668 0.03334 0.62002 0.1 l0 2.64 c-0.30666 -0.06666 -0.64666 -0.1 -1.02 -0.1 c-1.8667 0 -2.8 1.1067 -2.8 3.32 l0 4.66 l-2.84 0 l0 -10.34 l2.7 0 l0 1.92 l0.04 0 c0.28 -0.66666 0.72334 -1.2 1.33 -1.6 s1.2633 -0.6 1.97 -0.6 z M68.60000000000001 5.720000000000001 l0 2.48 l-7.66 9.16 l7.86 0 l0 2.64 l-12.04 0 l0 -2.48 l7.66 -9.16 l-7.06 0 l0 -2.64 l11.24 0 z M75.36 9.38 c1.6533 0 2.96 0.50334 3.92 1.51 s1.44 2.3234 1.44 3.95 c0 1.64 -0.49 2.9566 -1.47 3.95 s-2.2766 1.49 -3.89 1.49 c-1.64 0 -2.94 -0.50334 -3.9 -1.51 s-1.44 -2.3166 -1.44 -3.93 c0 -1.6667 0.49 -2.9934 1.47 -3.98 s2.27 -1.48 3.87 -1.48 z M72.86 14.84 c0 1.0533 0.21334 1.8666 0.64 2.44 s1.0467 0.86 1.86 0.86 c0.84 0 1.47 -0.29334 1.89 -0.88 s0.63 -1.3933 0.63 -2.42 c0 -1.0667 -0.21666 -1.8867 -0.65 -2.46 s-1.0633 -0.86 -1.89 -0.86 c-0.8 0 -1.4133 0.28666 -1.84 0.86 s-0.64 1.3933 -0.64 2.46 z M88.5 9.38 c1.32 0 2.2766 0.33338 2.87 1 s0.89 1.7267 0.89 3.18 l0 6.44 l-2.84 0 l0 -5.86 c0 -0.85334 -0.13666 -1.4867 -0.41 -1.9 s-0.74334 -0.62 -1.41 -0.62 c-0.77334 0 -1.3333 0.23334 -1.68 0.7 s-0.52 1.2333 -0.52 2.3 l0 5.38 l-2.84 0 l0 -10.34 l2.7 0 l0 1.44 l0.06 0 c0.70666 -1.1467 1.7667 -1.72 3.18 -1.72 z M99.2 9.38 c0.97334 0 1.84 0.22664 2.6 0.67998 s1.3567 1.11 1.79 1.97 s0.65 1.85 0.65 2.97 c0 0.10666 -0.0066602 0.28 -0.02 0.52 l-7.46 0 c0.02666 0.82666 0.24332 1.47 0.64998 1.93 s1.03 0.69 1.87 0.69 c0.52 0 0.99666 -0.13 1.43 -0.39 s0.71 -0.57666 0.83 -0.95 l2.5 0 c-0.73334 2.32 -2.3466 3.48 -4.84 3.48 c-0.94666 -0.01334 -1.8233 -0.22 -2.63 -0.62 s-1.45 -1.0233 -1.93 -1.87 s-0.72 -1.83 -0.72 -2.95 c0 -1.0533 0.24334 -2.0134 0.73 -2.88 s1.1333 -1.5133 1.94 -1.94 s1.6767 -0.64 2.61 -0.64 z M101.38 13.719999999999999 c-0.13334 -0.77334 -0.38 -1.3333 -0.74 -1.68 s-0.87334 -0.52 -1.54 -0.52 c-0.69334 0 -1.24 0.19666 -1.64 0.59 s-0.63334 0.93 -0.7 1.61 l4.62 0 z" />
                            </g>
                        </svg>


                    </div></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">
                <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar m-1">
                    <div className="w-10 rounded-full menu menu-horizontal">
                        <img src="https://i.ibb.co/4MKnpsb/Screenshot-309.png" />

                    </div>
                </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
                
                <Link to='/login'><button className='btn btn-warning md:ml-2'>Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;