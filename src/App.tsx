import { Check } from '@styled-icons/material/Check';
import { FontDownload } from '@styled-icons/material/FontDownload';
import { FormatColorText } from '@styled-icons/material/FormatColorText';
import { Image } from '@styled-icons/material/Image';
import { LineWeight } from '@styled-icons/material/LineWeight';
import { Link } from '@styled-icons/material/Link';
import { OndemandVideo } from '@styled-icons/material/OndemandVideo';
import {
  ColorPickerToolbarDropdown,
  createAlignPlugin,
  createAutoformatPlugin,
  createBlockquotePlugin,
  createBoldPlugin,
  createCodeBlockPlugin,
  createCodePlugin,
  createComboboxPlugin,
  createDeserializeCsvPlugin,
  createDeserializeDocxPlugin,
  createDeserializeMdPlugin,
  createExitBreakPlugin,
  createFontBackgroundColorPlugin,
  createFontColorPlugin,
  createFontFamilyPlugin,
  createFontSizePlugin,
  createFontWeightPlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createHorizontalRulePlugin,
  createImagePlugin,
  createIndentPlugin,
  createItalicPlugin,
  createJuicePlugin,
  createKbdPlugin,
  createLinkPlugin,
  createListPlugin,
  createMediaEmbedPlugin,
  createMentionPlugin,
  createNodeIdPlugin,
  createNormalizeTypesPlugin,
  createParagraphPlugin,
  createPlateUI,
  createPlugins,
  createResetNodePlugin,
  createSelectOnBackspacePlugin,
  createSoftBreakPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createTablePlugin,
  createTodoListPlugin,
  createTrailingBlockPlugin,
  createUnderlinePlugin,
  HeadingToolbar,
  ImageToolbarButton,
  LinkToolbarButton,
  MARK_BG_COLOR,
  MARK_COLOR,
  MediaEmbedToolbarButton,
  MentionCombobox,
  Plate,
} from '@udecode/plate';
import { createLineHeightPlugin } from '@udecode/plate-line-height';
import { LineHeightToolbarDropdown } from '@udecode/plate-ui-line-height';
import {
  AlignToolbarButtons,
  BasicElementToolbarButtons,
  BasicMarkToolbarButtons,
  IndentToolbarButtons,
  ListToolbarButtons,
  TableToolbarButtons,
} from './config/components/Toolbars';
import { withStyledPlaceHolders } from './config/components/withStyledPlaceHolders';
import { CONFIG } from './config/config';
import { VALUES } from './config/values/values';

const App = () => {
  let components = createPlateUI();
  components = withStyledPlaceHolders(components);

  const plugins = createPlugins([
    createParagraphPlugin(),
    createBlockquotePlugin(),
    createTodoListPlugin(),
    createHeadingPlugin(),
    createImagePlugin(),
    createHorizontalRulePlugin(),
    createLineHeightPlugin(CONFIG.lineHeight),
    createLinkPlugin(),
    createListPlugin(),
    createTablePlugin(),
    createMediaEmbedPlugin(),
    createCodeBlockPlugin(),
    createAlignPlugin(CONFIG.align),
    createBoldPlugin(),
    createCodePlugin(),
    createItalicPlugin(),
    createHighlightPlugin(),
    createUnderlinePlugin(),
    createStrikethroughPlugin(),
    createSubscriptPlugin(),
    createSuperscriptPlugin(),
    createFontBackgroundColorPlugin(),
    createFontFamilyPlugin(),
    createFontColorPlugin(),
    createFontSizePlugin(),
    createFontWeightPlugin(),
    createKbdPlugin(),
    createNodeIdPlugin(),
    createIndentPlugin(CONFIG.indent),
    createAutoformatPlugin(CONFIG.autoformat),
    createResetNodePlugin(CONFIG.resetBlockType),
    createSoftBreakPlugin(CONFIG.softBreak),
    createExitBreakPlugin(CONFIG.exitBreak),
    createNormalizeTypesPlugin(CONFIG.forceLayout),
    createTrailingBlockPlugin(CONFIG.trailingBlock),
    createSelectOnBackspacePlugin(CONFIG.selectOnBackspace),
    createComboboxPlugin(),
    createMentionPlugin(),
    createDeserializeMdPlugin(),
    createDeserializeCsvPlugin(),
    createDeserializeDocxPlugin(),
    createJuicePlugin(),
  ], {
    components,
  });

  return (
    <Plate
      id="playground"
      editableProps={CONFIG.editableProps}
      initialValue={VALUES.playground}
      plugins={plugins}
    >
      <HeadingToolbar>
        <BasicElementToolbarButtons />
        <ListToolbarButtons />
        <IndentToolbarButtons />
        <BasicMarkToolbarButtons />
        <ColorPickerToolbarDropdown
          pluginKey={MARK_COLOR}
          icon={<FormatColorText />}
          selectedIcon={<Check />}
          tooltip={{ content: 'Text color' }}
        />
        <ColorPickerToolbarDropdown
          pluginKey={MARK_BG_COLOR}
          icon={<FontDownload />}
          selectedIcon={<Check />}
          tooltip={{ content: 'Highlight color' }}
        />
        <AlignToolbarButtons />
        <LineHeightToolbarDropdown icon={<LineWeight />} />
        <LinkToolbarButton icon={<Link />} />
        <ImageToolbarButton icon={<Image />} />
        <MediaEmbedToolbarButton icon={<OndemandVideo />} />
        <TableToolbarButtons />
      </HeadingToolbar>

      <MentionCombobox items={CONFIG.mentionItems} />
    </Plate>
  );
}

export default App;
