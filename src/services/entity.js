/**
 * 生成短链接
 * @param {string} url 原始链接
 * @returns 短链接
 */
const shortUrl = async url => {
    const res = await fetch('/url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || 'Request failed');
    }

    return data;
}

const entityService = { shortUrl };

export default entityService;
