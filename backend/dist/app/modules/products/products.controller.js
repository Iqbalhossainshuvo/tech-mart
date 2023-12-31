"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const products_service_1 = require("./products.service");
const products_constant_1 = require("./products.constant");
const pagination_constant_1 = require("../../../constants/pagination.constant");
const shared_1 = __importDefault(require("../../../shared/shared"));
const verifyAuthToken_1 = require("../../../util/verifyAuthToken");
// Upload Product
const uploadProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = __rest(req.body, []);
    const token = (0, verifyAuthToken_1.verifyAuthToken)(req);
    const result = yield products_service_1.ProductService.uploadProduct(productData, token);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Product Uploaded Successfully",
        data: result,
    });
}));
// Get All Product
const getAllProducts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, shared_1.default)(req.query, products_constant_1.productsFilterableFields);
    const options = (0, shared_1.default)(req.query, pagination_constant_1.paginationFields);
    const products = yield products_service_1.ProductService.getAllProducts(filters, options);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Product's Retrieved Successfully",
        data: products,
    });
}));
// Get Products by Category
const getProductsByCategory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category } = req.query;
    const filters = (0, shared_1.default)(req.query, products_constant_1.productsFilterableFields);
    const options = (0, shared_1.default)(req.query, pagination_constant_1.paginationFields);
    const products = yield products_service_1.ProductService.getProductsByCategory(category, filters, options);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Products Retrieved Successfully",
        data: products,
    });
}));
// Get All Product
const getTopSellingProducts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield products_service_1.ProductService.getTopSellingProducts();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Product's Retrieved Successfully",
        data: products,
    });
}));
// Get Products by ID
const getProductsByID = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield products_service_1.ProductService.getProductsByID(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Product Retrieved Successfully",
        data: product,
    });
}));
const updateProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const productData = __rest(req.body, []);
    const token = (0, verifyAuthToken_1.verifyAuthToken)(req);
    yield products_service_1.ProductService.updateProduct(id, productData, token);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Product Updated Successfully",
        data: null,
    });
}));
exports.ProductController = {
    uploadProduct,
    getAllProducts,
    getProductsByCategory,
    getTopSellingProducts,
    getProductsByID,
    updateProduct,
};
