export const getTimeAgo = (currentDate, value) => {
    const diff = Math.floor((currentDate.getTime() - new Date(value).getTime()) / 1000);
    const minutes = Math.floor(diff / 60);
    const hours = Math.floor(diff / 3600);
    const days = Math.floor(diff / 86400);
    const weeks = Math.floor(diff / 604800);
    const years = Math.floor(diff / 31536000);
    if (years > 0) {
        return `${years}y`;
    }
    else if (weeks > 0) {
        return `${weeks}w`;
    }
    else if (days > 0) {
        return `${days}d`;
    }
    else if (hours > 0) {
        return `${hours}h`;
    }
    else if (minutes > 0) {
        return `${minutes}m`;
    }
    else {
        return "just now";
    }
};
