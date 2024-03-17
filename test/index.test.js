const assert = require('assert');
const { paginate } = require('../src/seoPagination');

describe('SEO Pagination', () => {
    it('should return pagination metadata', () => {
        const currentPage = 1;
        const totalPages = 10;
        const pagination = paginate(currentPage, totalPages);
        assert.strictEqual(pagination.page, currentPage);
        assert.strictEqual(pagination.totalPages, totalPages);
        // Add more assertions as needed
    });
});
