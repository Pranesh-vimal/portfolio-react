import React from "react";
import social from "../data/social.json";

function SocialLinks() {
    return (
        <>
            {social &&
                social.map((data, index) => (
                    <div className="my-3" key={index}>
                        <a href={data.link} target="_blank" rel="noreferrer">
                            <i className={`${data.icon} text-2xl`}></i>
                        </a>
                    </div>
                ))}
        </>
    );
}

export default SocialLinks;
