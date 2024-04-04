const fetchTags = async (page, pageSize, sortBy) => {
    let order = 'desc';
    let sort = 'popular';

    switch (sortBy) {
        case 'name_asc':
            order = 'asc';
            sort = 'name';
            break;
        case 'name_desc':
            order = 'desc';
            sort = 'name';
            break;
        case 'popular_asc':
            order = 'asc';
            sort = 'popular';
            break;
        case 'popular_desc':
            order = 'desc';
            sort = 'popular';
            break;
        case 'activity_asc':
            order = 'asc';
            sort = 'activity';
            break;
        case 'activity_desc':
            order = 'desc';
            sort = 'activity';
            break;
    }

    const url = `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pageSize}&order=${order}&sort=${sort}&site=stackoverflow`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (!data.items) throw new Error('No data');
    
        return {items: data.items || [], quota_remaining: data.quota_remaining};
    } catch (error) {
        console.error('Failed to fetch tags:', error);
        throw new Error('Failed to fetch tags');
    }
};

export {fetchTags};
