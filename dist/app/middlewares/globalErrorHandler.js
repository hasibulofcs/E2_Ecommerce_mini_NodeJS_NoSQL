"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const zod_1 = require("zod");
// Correctly typed error handler
const globalErrorHandler = (err, req, res, next) => {
    console.log(`in global error handler.`, err instanceof zod_1.ZodError);
    // Handle Zod validation errors
    if (err instanceof zod_1.ZodError) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            success: false,
            statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST,
            message: "Validation error",
            errors: err.errors.map((e) => ({
                message: e.message,
            })),
        });
    }
    // Default error handling
    const statusCode = err.statusCode || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
    const statusMessage = err.message || "Something went wrong!";
    return res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        message: statusMessage,
    });
};
exports.default = globalErrorHandler;
