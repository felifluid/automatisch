import defineTrigger from '../../../../helpers/define-trigger.js';

export default defineTrigger({
  name: 'Category overspent',
  key: 'categoryOverspent',
  pollInterval: 15,
  description:
    'Triggers when a category exceeds its budget, resulting in a negative balance.',

  async run($) {
    const categoryWithNegativeBalance = [];

    const response = await $.http.get('/budgets/last-used/categories');
    const categoryGroups = response.data.data.category_groups;

    categoryGroups.forEach((group) => {
      group.categories.forEach((category) => {
        if (category.balance < 0) {
          categoryWithNegativeBalance.push(category);
        }
      });
    });

    if (categoryWithNegativeBalance?.length) {
      for (const category of categoryWithNegativeBalance) {
        $.pushTriggerItem({
          raw: category,
          meta: {
            internalId: category.id,
          },
        });
      }
    }
  },
});
