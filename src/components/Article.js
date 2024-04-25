import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    const renderEmojis = () => {
        const emojis = [];
        const numEmojis = minutes < 30 ? Math.ceil(minutes / 5) : Math.ceil(minutes / 10);
        const emoji = minutes < 30 ? "☕️" : "🍱";

        for (let i = 0; i < numEmojis; i++) {
            emojis.push(emoji);
        }

        return emojis.join("");
    };

    return (
        <article>
            <h3>{title}</h3>
            <small>{renderEmojis()} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;
