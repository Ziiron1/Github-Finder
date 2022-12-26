import { UserProps } from "../types/user";

import { MdLocationPin } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'

import { Link } from "react-router-dom";


const User = ({
    login,
    name,
    avatar_url,
    followers,
    following,
    location,
    email,
    html_url,
    repos_url,
    public_repos
}: UserProps) => {
    return <div>
        <img src={avatar_url} alt={login} />
        <h2>{login}</h2>
        <h3>{name}</h3>
        {location && (
            <p>
                <MdLocationPin />
                <span>{location}</span>
            </p>
        )}
        {public_repos && (
            <div>
                <h4>Repositórios Públicos</h4>
                <p>{public_repos}</p>
            </div>

        )}
        {email && (
            <p>
                <AiOutlineMail />
                <span>{email}</span>
            </p>
        )}
        <div>
            <div>
                <p>Seguidores: </p>
                <p>{followers}</p>
            </div>
            <div>
                <p>Seguindo: </p>
                <p>{following}</p>
            </div>
        </div>
        <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
    </div>;
};

export default User;
