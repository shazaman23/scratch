import { AuditEventProperties } from "../AuditEventProperties/AuditEventProperties.i";
import { AuditEventReporter } from "../AuditEventReporters/AuditEventReporter";
import { GAReporter } from "../AuditEventReporters/GAReporter";
import { HeapReporter } from "../AuditEventReporters/HeapReporter";
import { AuditEvent } from "./AuditEvent";

class AddTransactionTotalProperties implements AuditEventProperties {
    constructor(
        public category,
        public label,
        public value
    ) {}
}

export class TransactionTotalAudit extends AuditEvent {
    name = 'Ecommerce Transaction Total';
    action = 'transactionTotal';
    properties: AddTransactionTotalProperties;
    protected reportsTo: AuditEventReporter[];

    constructor(total: string) {
        super();
        this.properties = new AddTransactionTotalProperties('ecommerce', total, parseFloat(total));
        this.reportsTo = [
            new HeapReporter(this),
            new GAReporter(this)
        ]
    }
}