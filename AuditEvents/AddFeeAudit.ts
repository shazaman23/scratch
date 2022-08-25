import { AuditEventProperties } from "../AuditEventProperties/AuditEventProperties.i";
import { AuditEventReporter } from "../AuditEventReporters/AuditEventReporter";
import { GAReporter } from "../AuditEventReporters/GAReporter";
import { HeapReporter } from "../AuditEventReporters/HeapReporter";
import { AuditEvent } from "./AuditEvent";

class AddFeeProperties implements AuditEventProperties {
    constructor(
        public category,
        public label,
        public value
    ) {}
}

export class AddFeeAudit extends AuditEvent {
    name = 'Ecommerce Add Fee';
    action = 'addFee';
    properties: AddFeeProperties;
    protected reportsTo: AuditEventReporter[];

    constructor(feeType: string, price: string) {
        super();
        this.properties = new AddFeeProperties('ecommerce:addItem:' + feeType, price, 0);
        this.reportsTo = [
            new HeapReporter(this),
            new GAReporter(this)
        ]
    }
}