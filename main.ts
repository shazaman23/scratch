import { AddFeeAudit } from "./AuditEvents/AddFeeAudit";
import { AddPledgeAudit } from "./AuditEvents/AddPledgeAudit"
import { TransactionTotalAudit } from "./AuditEvents/TransactionTotalAudit";

const pledge = {
    id: 10,
    amount: 30.00
}
const fee = {
    type: 'OptionalSponsorFee',
    amount: 2.00
}
const transaction = {
    total: 32.00
}


// Easy implementation
let auditEvents = [
    new AddPledgeAudit(`${pledge.id}`, `${pledge.amount}`),
    new AddFeeAudit(fee.type, `${fee.amount}`),
    new TransactionTotalAudit(`${transaction.total}`)
];

auditEvents.forEach((event) => {
    event.fire();
});