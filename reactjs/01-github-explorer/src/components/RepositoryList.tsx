import { RepositoryItem } from "./RepositoryItem";
import { FormEvent, useEffect, useState } from "react";

import '../styles/repositories.scss'

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [html_url, setHtmlUrl] = useState('');

    useEffect(() => {
        fetch('https://api.github.com/users/nandobutzke/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    function handleCreateNewRepository(event: FormEvent) {
        event.preventDefault();

        const repository = {
            name: name,
            description: description,
            html_url: html_url
        };

        setRepositories([repository, ...repositories]);
        setName('');
        setDescription('');
        setHtmlUrl('');
    }

    return (
        <section className="repository-list">
            <h1>Repository List</h1>

            <form onSubmit={handleCreateNewRepository}>
                <input 
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Descrição"
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                />
                <input 
                    type="text"
                    placeholder="URL"
                    value={html_url}
                    onChange={event => setHtmlUrl(event.target.value)}
                />
                <button
                    type="submit"
                >
                    Criar repositório
                </button>
            </form>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />;
                })}
            </ul>
        </section>
    );
}