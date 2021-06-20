import { Component, Input } from '@angular/core'
import { CompanyModel } from '../../../../store/companies/models/company.model'

@Component({
    selector: 'app-companies-list-item',
    templateUrl: './companies-list-item.component.html',
    styleUrls: ['./companies-list-item.component.scss'],
})
export class CompaniesListItemComponent {
    @Input() company: CompanyModel
}
