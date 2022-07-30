"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { GunsAndButter } from './GunsAndButter';
const OrderType_1 = require("./OrderType");
const GunsAndButter = require("./GunsAndButter");
var date = new Date();
var sim = new GunsAndButter();
sim.addItem("0", 5, "a", OrderType_1.OrderType.Sell, date);
sim.addItem("0", 5, "b", OrderType_1.OrderType.Buy, date);
console.log("ask: ", sim.exchanges[0].sellOrders);
console.log("bid: ", sim.exchanges[0].buyOrders);
console.log(sim.getReceipts());
//# sourceMappingURL=capSim.js.map