import { RepoProps } from "../types/repo";

import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";
import { CgWebsite } from 'react-icons/cg'

import classes from "./Repo.module.css";

const Repo = ({
    name,
    language,
    html_url,
    forks_count,
    stargazers_count,
    created_at,
    description,
    homepage,
}: RepoProps) => {
    return (
        <div className={classes.repo}>
            <h3>{name}</h3>
            <p>
                <BsCodeSlash /> {language}
            </p>

            <p style={{ fontSize: '.9rem' }}>Data Criação: {Intl.DateTimeFormat('pt-BR')
                .format(new Date(created_at))}
            </p>

            <p>{description}</p>


            <div className={classes.stats}>
                <div>
                    <AiOutlineStar />
                    <span>{stargazers_count}</span>
                </div>
                <div>
                    <AiOutlineFork />
                    <span>{forks_count}</span>
                </div>
            </div>
            <div className={classes.links}>
                <a href={html_url} target="_blank" className={classes.repo_btn}>
                    <span>Ver código</span>
                    <RiGitRepositoryLine />
                </a>
                {homepage && (
                    <a href={homepage} target="_blank" className={classes.repo_btn}>
                        <span>Website</span>
                        <CgWebsite />
                    </a>
                )}
            </div>
        </div>
    );
};

export default Repo;