import { UserProps } from "../types/user";

import { MdLocationPin } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import { MdOutlineWork } from 'react-icons/md'
import { FaUserCircle } from 'react-icons/fa'

import { Link } from "react-router-dom";
import classes from './User.module.css'


const User = ({
    login,
    name,
    avatar_url,
    followers,
    following,
    location,
    email,
    html_url,
    public_repos,
    bio,
    blog,
    company,
}: UserProps) => {
    return <div className={classes.user}>
        <img src={avatar_url} alt={login} />
        <h2><FaUserCircle className={classes.profilesvg} /> {login}</h2>
        <h3>{name}</h3>
        {location && (
            <p className={classes.location}>
                <MdLocationPin />
                <span>{location}</span>
            </p>
        )}

        {bio && (
            <p>{bio}</p>
        )}

        {blog && (
            <p>
                <a href={blog} className={classes.profile}>Website </a>
            </p>
        )}

        {company && (
            <p>
                <abbr title="Empresa" style={{ textDecoration: 'none', display: 'flex', gap: '8px' }}><MdOutlineWork />
                    <p> {company}</p>
                </abbr>
            </p>
        )}

        {public_repos && (
            <div>
                <h4>Repositórios Públicos:</h4>
                <p>{public_repos}</p>
            </div>

        )}
        {email && (
            <p>
                <AiOutlineMail />
                <span>{email}</span>
            </p>
        )}
        <div className={classes.stats}>
            <div>
                <p>Seguidores </p>
                <p className={classes.number}>{followers}</p>
            </div>
            <div>
                <p>Seguindo </p>
                <p className={classes.number}>{following}</p>
            </div>
        </div>
        <div className={classes.links}>
            <a href={html_url} className={classes.profile}>Perfil do Github</a>
            <Link to={`/repos/${login}`} className={classes.profile}>Ver melhores projetos</Link>
        </div>
    </div>;
};

export default User;
