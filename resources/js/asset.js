import DetailActionDropdown from './components/DetailActionDropdown';
import InlineActionDropdown from './components/InlineActionDropdown';
import ActionSelector from './components/ActionSelector';
import ActionDropdown from './components/ActionDropdown';

console.log('testing nova button selectors');

Nova.booting(app => {
  app.component('DetailActionDropdown', DetailActionDropdown);
  app.component('InlineActionDropdown', InlineActionDropdown);
  app.component('ActionSelector', ActionSelector);
  app.component('ActionDropdown', ActionDropdown);
});
