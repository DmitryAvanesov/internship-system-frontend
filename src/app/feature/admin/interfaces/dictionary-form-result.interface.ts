import { DialogCloseReasons } from '@core/enums/dialog-close-reasons.enum';
import { DictionaryElementModel } from '@store/dictionaries/models/dictionary-element.model';

export interface DictionaryFormResult {
  reason?: DialogCloseReasons;
  data?: DictionaryElementModel;
}
