"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDonarInput = exports.createDonarInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    name: zod_1.default.string().min(3),
    rollNO: zod_1.default.string().min(3),
    bloodType: zod_1.default.string(),
    address: zod_1.default.string().min(3),
    age: zod_1.default.string().min(1),
    lastDonation: zod_1.default.string().min(3),
    contact: zod_1.default.string().min(3),
    image: zod_1.default.string().min(3),
    available: zod_1.default.boolean()
});
exports.signinInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    name: zod_1.default.string().optional()
});
exports.createDonarInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    name: zod_1.default.string().min(3),
    rollNO: zod_1.default.string().min(3),
    bloodType: zod_1.default.string(),
    address: zod_1.default.string().min(3),
    age: zod_1.default.string().min(1),
    lastDonation: zod_1.default.string().min(3),
    contact: zod_1.default.string().min(3),
    image: zod_1.default.string().min(3),
    available: zod_1.default.boolean()
});
exports.updateDonarInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    name: zod_1.default.string().min(3),
    rollNO: zod_1.default.string().min(3),
    bloodType: zod_1.default.string(),
    address: zod_1.default.string().min(3),
    age: zod_1.default.string().min(1),
    lastDonation: zod_1.default.string().min(3),
    contact: zod_1.default.string().min(3),
    image: zod_1.default.string().min(3),
    available: zod_1.default.boolean()
});
