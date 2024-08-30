import { useState } from "react";

/* eslint-disable react/prop-types */
export function TwitterFollowCard({ userName, formatUserName, name, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
	
    const imageSrc = `https://unavatar.io/github/${userName}`;
    const followingText = isFollowing ? 'Siguiendo' : 'Seguir';
    const followingButton = isFollowing ? 'follow-button is-following' : 'follow-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

	return (
		<article className="follow-card">
			<header>
				<img
                    className="avatar"
					alt="Avatar user"
					src={imageSrc}
				/>
				<div className="info">
					<strong>{name}</strong>
					<span className="infoUserName">{formatUserName(userName)}</span>
				</div>
			</header>

			<aside>
				<button
                    className={followingButton}
                    onClick={handleClick}
                >
                    <span className="following-text">
                        {followingText}
                    </span>
                    <span className="stop-follow-text">
                        Dejar de seguir
                    </span>
                </button>
			</aside>
		</article>
	);
}
