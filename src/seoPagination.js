function paginate(currentPage, totalPages) {
    return {
        page: currentPage,
        totalPages: totalPages,
        // Other SEO-friendly pagination metadata
    };
}

module.exports = { paginate };
