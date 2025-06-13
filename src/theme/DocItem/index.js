import React from 'react';
import DocItem from '@theme-original/DocItem';
import HandbookHeader from '@site/src/components/HandbookHeader';

export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
    </>
  );
}