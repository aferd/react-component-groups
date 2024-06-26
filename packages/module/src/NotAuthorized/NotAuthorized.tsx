import React from 'react';
import { Button, EmptyState, EmptyStateBody, EmptyStateIcon, EmptyStateProps, EmptyStateVariant, EmptyStateHeader, EmptyStateFooter, EmptyStateActions, ButtonVariant, } from '@patternfly/react-core';
import { LockIcon } from '@patternfly/react-icons';

export interface NotAuthorizedProps extends Omit<EmptyStateProps, 'children' | 'title'> {
  /** Service name displayed in the title */
  serviceName?: string;
  /** Icon displayed above the title */
  icon?: React.ComponentType;
  /** Custom description */
  description?: React.ReactNode;
  /** Shows link to the previous page */
  showReturnButton?: boolean;
  /** Custom previous page button text */
  prevPageButtonText?: React.ReactNode;
  /** Custom className */
  className?: string;
  /** Custom title */
  title?: React.ReactNode;
  /** Custom primary action - there should only be one defined */
  primaryAction?: React.ReactNode;
  /** Custom secondary actions */
  secondaryActions?: React.ReactNode;
  /** Custom landing page button text */
  toLandingPageText?: React.ReactNode;
  /** Custom landing page button URL */
  toLandingPageUrl?: string;
  /** Custom OUIA ID */
  ouiaId?: string | number;
}

const NotAuthorized: React.FunctionComponent<NotAuthorizedProps> = ({
  prevPageButtonText = 'Return to previous page',
  toLandingPageText = 'Go to landing page',
  toLandingPageUrl = ".",
  primaryAction = null,
  secondaryActions = null,
  serviceName,
  title = `You do not have access to ${serviceName}`,
  icon: Icon = LockIcon,
  description = 'Contact your system administrator(s) for more information.',
  showReturnButton = true,
  className,
  ouiaId = 'NotAuthorized',
  ...props
}: NotAuthorizedProps) => (
  <EmptyState variant={EmptyStateVariant.full} className={className} data-ouia-component-id={ouiaId} {...props}>
    <EmptyStateHeader titleText={<>{title}</>} icon={<EmptyStateIcon icon={Icon} data-ouia-component-id={`${ouiaId}-icon`} />} headingLevel="h5" data-ouia-component-id={`${ouiaId}-header`} />
    <EmptyStateBody data-ouia-component-id={`${ouiaId}-body`}>{description}</EmptyStateBody>
    <EmptyStateFooter data-ouia-component-id={`${ouiaId}-footer`}>
      {primaryAction ? <EmptyStateActions>{primaryAction}</EmptyStateActions> : null}
      {showReturnButton && !primaryAction &&
            (document.referrer ? (
              <Button variant={ButtonVariant.primary} onClick={() => history.back()} ouiaId={`${ouiaId}-back-button`}>
                {prevPageButtonText}
              </Button>
            ) : (
              <Button variant={ButtonVariant.primary} component="a" href={toLandingPageUrl} ouiaId={`${ouiaId}-home-button`}>
                {toLandingPageText}
              </Button>
            ))}
      <EmptyStateActions>
        {secondaryActions ? <EmptyStateActions>{secondaryActions}</EmptyStateActions> : null}
      </EmptyStateActions>
    </EmptyStateFooter>
  </EmptyState>
);


export default NotAuthorized;
