import * as yargs from 'yargs';
import { Context } from '../../../../common/context';
import { translations } from '../../../../common/translations';
import { GraphqlActions } from '../../../../consts/GraphqlActions';
import { ProjectConfigurationState } from '../../../../common/configuraion';

export default {
  command: 'delete',
  handler: async (params: any, context: Context) => {
    ProjectConfigurationState.expectConfigured(context);
    let { name } = params;
    context.spinner.start(context.i18n.t('environment_delete_in_progress'));
    await context.request(GraphqlActions.environmentDelete, { environmentName: name });
    context.spinner.stop();
  },

  describe: translations.i18n.t('environment_delete_describe'),

  builder: (args: yargs.Argv): yargs.Argv =>
    args.usage(translations.i18n.t('environment_delete_usage')).option('name', {
      alias: 'n',
      describe: translations.i18n.t('environment_delete_name_describe'),
      type: 'string',
      demandOption: true,
    }),
};
