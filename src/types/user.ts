export type UserProps = {
    avatar_url: string;
    login: string;
    location: string;
    followers: number;
    following: number;
    email: string; /* Se tiver, caso nao tenha, nao mande nada */
    html_url: string;
    repos_url: string;
    public_repos: string;
    name: string;
    bio: string;
}