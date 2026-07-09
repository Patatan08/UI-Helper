import React from 'react';
import ScrollView from 'devextreme-react/scroll-view';
import classNames from 'classnames';
import './SingleCard.scss';


export default function SingleCard({ title, description, children, className }) {
  return (
    <ScrollView height={'100%'} width={'100%'} className={classNames('with-footer single-card', className)}>
      <div className={'dx-card content'}>
        <div className={'header'}>
          <div className={'title dx-theme-text-color'}>{title}</div>
          <div className={'description dx-theme-text-color'}>{description}</div>
        </div>
        {children}
      </div>
    </ScrollView>
  )
}
