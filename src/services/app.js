const apiUrl = {

    signUp: 'POST /auth/register',
    signIn: 'POST /auth/login',

    uploadPost:'POST /file/upload',
    createCategoryPost:'POST /category/create',
    getAllCategory:'/category/getCategoryList',
    updateCategory:'PUT /category/update',
    getCategoryId:'/category/getById',
    deleteCategory:'DELETE /category/delete',

    createProductAddition:'POST /product-addition/create',
    getProductAdditionCategoryId:'/product-addition/getAllProductAdditions',
    deleteProductAddition:'DELETE /product-addition/delete',

    testPhoto: 'POST /category/create',
    getCategoryIdAndName: '/category/findAllCategoryId',
    getCategores: '/category/getCategoryList',

    postCategoryItem: 'POST /categoryItem/create'

}; 
export default apiUrl
