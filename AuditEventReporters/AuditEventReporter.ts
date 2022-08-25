import { AuditEvent } from "../AuditEvents/AuditEvent";

export abstract class AuditEventReporter {    
    constructor(protected event: AuditEvent) {}

    protected abstract callHandler(): void;
    
    getReportableProperties(): any {
        return this.event.properties;
    }

    report() {
        // TODO: This enforces safe calls to 3rd party event handling services
        // TODO:   If a call to Heap fails, it will never kill the page or 
        // TODO:   interrupt the UX by default.
        try {
            this.callHandler();
        } catch (e) {
            // TODO: Error handling can be done in a uniform way. 
            // TODO:   All new audit event handlers will log the same way by default
            console.error(e);
        }
    }
}