/**
 * AdminPanelEditor - component
 */

import React, { useState } from 'react';
import { Value } from 'slate'
import PropTypes from 'prop-types';
import { PulseLoader } from 'react-spinners';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/CloudUpload';
import Editor from '../../components/EditorS';

import backgroundImage from '../../../assets/images/writer.svg';
import './index.css';


// TODO --- remove mock initialValue
const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph.',
              },
            ],
          },
        ],
      },
    ],
  },
})


const AdminPanelEditor = ({ loading, setPost }) => {
  const [postData, updatePostData] = useState('');
  const handlerEditor = data => updatePostData(data.toJSON());
  const handleSetPost = () => setPost(postData);

  return (
    <div className="AdminPanelEditor-wrap">
      <Editor callback={handlerEditor} placeholder="Type your story..." value={initialValue} />

      <PulseLoader
        className="page-loader"
        sizeUnit="px"
        color="#36D7B7"
        loading={loading}
      />

      <Tooltip title="Отправить" placement="bottom">
        <Button
          aria-label="Add"
          size="medium"
          onClick={handleSetPost}
          type="submit"
          variant="contained"
          color="primary"
          style={{ margin: '15px 0', minWidth: '100px' }}
        >
          <AddIcon />
        </Button>
      </Tooltip>

      <img src={backgroundImage} alt="writer" />
    </div>
  );
};

AdminPanelEditor.propTypes = {
  // data: PropTypes.string,
  setPost: PropTypes.func,
  loading: PropTypes.bool,
};

export default AdminPanelEditor;