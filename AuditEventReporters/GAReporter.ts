import ReactGA from "react-ga";
import { AuditEvent } from "../AuditEvents/AuditEvent";
import { AuditEventReporter } from "./AuditEventReporter";

export class GAReporter extends AuditEventReporter {
    private nonInteraction: boolean;

    constructor(event: AuditEvent, nonInteraction = false) {
        super(event);
        this.nonInteraction = nonInteraction;
    }

    getReportableProperties(): any {
        return {
            action: this.event.action,
            nonInteraction: this.nonInteraction,
            ...this.event.properties
        };
    }

    protected callHandler(): void {
        ReactGA.event(this.getReportableProperties());
    }    
}