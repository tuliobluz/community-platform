import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ResearchErrors } from './ResearchErrors'

describe('ResearchErrors', () => {
  it('renders component when visible and has intro errors', async () => {
    const descriptionError = 'Make sure this field is filled correctly'
    const descriptionTitle = 'Description'
    const errors = {
      description: descriptionError,
    }
    const labels = {
      description: {
        title: descriptionTitle,
      },
    }

    render(<ResearchErrors isVisible={true} errors={errors} labels={labels} />)

    await screen.findByText(descriptionError, { exact: false })
    await screen.findByText(descriptionTitle, { exact: false })
  })

  it('renders nothing when not visible', () => {
    const errors = {}
    const labels = {}

    const { container } = render(
      <ResearchErrors isVisible={false} errors={errors} labels={labels} />,
    )

    expect(container.innerHTML).toBe('')
  })
})
