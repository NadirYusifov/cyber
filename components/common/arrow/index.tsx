export function NextArrow(props: any) {
    const { onClick, className, style } = props;
    return (
        
            <button className={className} onClick={onClick} style={{...style, cursor: 'pointer'}}>
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.66673 0.333332C1.93215 0.332079 2.18689 0.43782 2.3734 0.626667L13.0401 11.2933C13.43 11.6838 13.43 12.3162 13.0401 12.7067L2.3734 23.3733C1.97939 23.7405 1.36539 23.7296 0.984571 23.3488C0.603755 22.968 0.592921 22.354 0.960067 21.96L10.9201 12L0.960067 2.04C0.570128 1.64958 0.570128 1.01709 0.960067 0.626667C1.14658 0.43782 1.40131 0.332079 1.66673 0.333332Z" fill="black" />
                </svg>
            </button>
        
    );
};

export function PrevArrow(props: any) {
    const { onClick, className, style } = props;
    return (
        <button className={className} onClick={onClick} style={{...style, cursor: 'pointer' }}>
            <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.3333 23.6667C12.0678 23.6679 11.8131 23.5622 11.6266 23.3733L0.959934 12.7067C0.569996 12.3162 0.569996 11.6838 0.959934 11.2933L11.6266 0.626666C12.0206 0.259521 12.6346 0.270354 13.0154 0.65117C13.3962 1.03199 13.4071 1.64599 13.0399 2.04L3.07993 12L13.0399 21.96C13.4299 22.3504 13.4299 22.9829 13.0399 23.3733C12.8534 23.5622 12.5987 23.6679 12.3333 23.6667Z" fill="black" />
            </svg>
        </button>
    );
};
