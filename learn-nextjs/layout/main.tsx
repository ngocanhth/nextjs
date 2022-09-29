import { Footer, Header } from '@/components/common'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import { LayoutProps } from 'models'
import React from 'react'

export function MainLayout({ children }: LayoutProps) {
	return (
		<Stack minHeight="100vh">
			<Header />

			<Box component="main" flexGrow={1}>
				{children}
			</Box>

			<Footer />
		</Stack>
	)
}
