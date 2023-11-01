import React from 'react';
import { Button, EmptyState, EmptyStateBody, EmptyStateHeader, EmptyStateIcon, EmptyStateVariant } from '@patternfly/react-core';
import { ExclamationCircleIcon } from '@patternfly/react-icons';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

const useStyles = createUseStyles({
  emptyStateUnavailable: {
    color: 'var(--pf-global--danger-color--100)',
    '& svg': { color: 'var(--pf-global--danger-color--100)' }
  },
  emptyStateLinkButton: {
    padding: '0',
  }
});

export interface UnavailableContentProps {
  /** Page to open when user clicks on status page link */
  statusPageUrl?: string;
}

const UnavailableContent: React.FunctionComponent<UnavailableContentProps> = ({ statusPageUrl = '' }: UnavailableContentProps) => {
  const classes = useStyles();
  return (
    <EmptyState variant={EmptyStateVariant.lg} className={clsx(classes.emptyStateUnavailable)}>
      <EmptyStateHeader titleText="This page is temporarily unavailable" icon={<EmptyStateIcon icon={ExclamationCircleIcon} />} headingLevel="h5" />
      <EmptyStateBody>
        Try refreshing the page. If the problem persists, contact your organization administrator or visit our{' '}
        <Button component='a' className={clsx(classes.emptyStateLinkButton)} variant='link' href={statusPageUrl} target="_blank" rel="noopener noreferrer">
          status page
        </Button>{' '}
        for known outages.
      </EmptyStateBody>
    </EmptyState>
  );
};

export default UnavailableContent;
