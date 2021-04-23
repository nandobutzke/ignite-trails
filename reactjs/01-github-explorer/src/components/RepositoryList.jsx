import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Repository List - nandobutzke</h1>
            <ul>
                <RepositoryItem />
            </ul>
        </section>
    );
}