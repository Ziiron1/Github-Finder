import { UserProps } from "../types/user";

import Search from "../components/Search";
import User from "../components/User";
import Error from "../components/Error";

import { useState } from 'react';

const Home = () => {

    const [user, setUser] = useState<UserProps | null>(null);
    const [error, setError] = useState(false);

    const loadUser = async (userName: string) => {

        setError(false);
        setUser(null);

        const res = await fetch(`https://api.github.com/users/${userName}`)

        const data = await res.json()

        console.log(data)

        if (res.status === 404) {
            setError(true);
            return;
        }


        const { avatar_url, login, name, location, bio, followers, following, email, html_url, public_repos, blog, company, site_admin } = data

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
            email,
            html_url,
            public_repos,
            name,
            bio,
            blog,
            company,
            site_admin
        }

        setUser(userData)
        console.log(data)

    }

    return (
        <div>
            <Search loadUser={loadUser} />
            {user && <User {...user} />}
            {error && <Error />}
        </div>
    );
};

export default Home;
