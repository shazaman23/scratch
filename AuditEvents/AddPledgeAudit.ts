import { AuditEventProperties } from "../AuditEventProperties/AuditEventProperties.i";
import { AuditEventReporter } from "../AuditEventReporters/AuditEventReporter";
import { GAReporter } from "../AuditEventReporters/GAReporter";
import { HeapReporter } from "../AuditEventReporters/HeapReporter";
import { AuditEvent } from "./AuditEvent";

// TODO: Well defined contract for what is expected on a given event. Property
// TODO:   set should be clearly defined between Tech/Analytics/Product teams
// TODO:   before creating a new AuditEvent implementation.
class AddPledgeProperties implements AuditEventProperties {
    constructor(
        public category,
        public label, 
        public value
    ) {};
}

export class AddPledgeAudit extends AuditEvent {
    // TODO: Some pledge settings are hardcoded here based off what we want 
    // TODO:   to see in Heap or GA around the event. These are dictated by
    // TODO:   Tech/Analytics/Product teams before creating the event.
    name = 'Ecommerce Add Pledge';
    action = 'addPledge';
    properties: AddPledgeProperties;
    protected reportsTo: AuditEventReporter[];
    
    constructor(pledgeId: string, price: string) {
        super();
        this.properties = new AddPledgeProperties('ecommerce:addItem:' + pledgeId, price, 0)
        this.reportsTo = [
            new HeapReporter(this),
            new GAReporter(this)
        ];
    }
}